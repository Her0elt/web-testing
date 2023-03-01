module Utils.FetchRepos exposing (query)

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
import Utils.Types exposing (Repo, User)


query : SelectionSet User RootQuery
query =
    Query.user { login = "her0elt" } userMapper |> SelectionSet.nonNullOrFail


userMapper : SelectionSet User Api.Object.User
userMapper =
    SelectionSet.succeed User
        |> with
            (User.pinnedItems
                (\optionals ->
                    { optionals
                        | first = Present 6
                    }
                )
                pinnedItemConnectionMapper
            )


pinnedItemConnectionMapper : SelectionSet (List Repo) Api.Object.PinnableItemConnection
pinnedItemConnectionMapper =
    PinnableItems.nodes pinnableItemMapper
        |> SelectionSet.nonNullOrFail
        |> SelectionSet.nonNullElementsOrFail
        |> SelectionSet.nonNullElementsOrFail


pinnableItemMapper : SelectionSet (Maybe Repo) Api.Union.PinnableItem
pinnableItemMapper =
    let
        defaults =
            PinnableItem.maybeFragments
    in
    PinnableItem.fragments { defaults | onRepository = repoMapper |> SelectionSet.map Just }


repoMapper : SelectionSet Repo Api.Object.Repository
repoMapper =
    SelectionSet.succeed Repo
        |> with Repository.name
        |> with Repository.description
        |> with Repository.url
