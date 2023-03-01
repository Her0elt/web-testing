module Main exposing (main)

import Api.Enum.PinnableItemType
import Api.Object
import Api.Object.PinnableItemConnection as PinnableItems
import Api.Object.Repository as Repository
import Api.Object.User as User
import Api.Query as Query
import Api.ScalarCodecs
import Api.Union
import Api.Union.PinnableItem as PinnableItem
import Browser
import Components.About exposing (about)
import Components.Header exposing (header)
import Components.Paper exposing (paper)
import Components.Repos exposing (repoList)
import Css
import Css.Global
import Env exposing (token)
import Graphql.Http
import Graphql.Operation exposing (RootQuery)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet as SelectionSet exposing (SelectionSet, with)
import Html.Styled as Html
import Html.Styled.Attributes exposing (css, src)
import Html.Styled.Events exposing (onClick)
import Http
import RemoteData exposing (RemoteData)
import Tailwind.Utilities as Tw
import Utils.FetchRepos exposing (query)
import Utils.Types exposing (Repo, User)


type alias Model =
    { showRepos : Bool
    , user : RemoteData (Graphql.Http.Error User) User
    }


makeRequest : Cmd Msg
makeRequest =
    query
        |> Graphql.Http.queryRequest "https://api.github.com/graphql"
        |> Graphql.Http.withHeader "authorization" ("Bearer " ++ token)
        |> Graphql.Http.send (RemoteData.fromResult >> GotRepos)


initialModel : ( Model, Cmd Msg )
initialModel =
    ( { showRepos = True
      , user = RemoteData.Loading
      }
    , makeRequest
    )



type Msg
    = Toggle
    | GotRepos (RemoteData (Graphql.Http.Error User) User)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotRepos user ->
            ( { model | user = user }, Cmd.none )

        Toggle ->
            ( { model | showRepos = not model.showRepos }, Cmd.none )


content : Model -> Html.Html msg
content model =
    if model.showRepos then
        case model.user of
            RemoteData.Success user ->
                repoList user.repos

            RemoteData.Loading ->
                Html.div [] []

            RemoteData.Failure err ->
                Html.div [] []

            RemoteData.NotAsked ->
                Html.div [] []

    else
        about


view : Model -> Html.Html Msg
view model =
    Html.div
        [ css
            [ Css.backgroundColor <| Css.hex "007ced"
            , Css.backgroundSize Css.cover
            , Css.position <| Css.absolute
            , Css.padding <| Css.px 60
            , Css.backgroundImage <|
                Css.linearGradient
                    (Css.stop <| Css.hex "007ced")
                    (Css.stop <| Css.hex "cce7ff")
                    []
            , Tw.grid
            , Tw.min_h_full
            , Tw.min_w_full
            ]
        ]
        [ Css.Global.global Tw.globalStyles
        , header model.showRepos Toggle
        , content model
        ]


subscriptions model =
    Sub.none


main : Program () Model Msg
main =
    Browser.element
        { init = \flags -> initialModel
        , view = view >> Html.toUnstyled
        , update = update
        , subscriptions = \_ -> Sub.none
        }
