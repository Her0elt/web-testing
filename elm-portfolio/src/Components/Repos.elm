module Components.Repos exposing (..)

import Api.Scalar
import Browser
import Components.Paper exposing (paper)
import Css
import Css.Global
import Css.Media as Media
import Html.Styled as Html
import Html.Styled.Attributes exposing (css, href)
import Html.Styled.Events exposing (onClick)
import Tailwind.Utilities as Tw
import Utils.Types exposing (Repo)


repoList : List Repo -> Html.Html msg
repoList repos =
    repos
        |> List.map
            (\repo ->
                Html.li
                    [ css
                        (List.concat
                            [ paper
                            , [ Css.textAlign Css.center
                              , Css.padding <| Css.px 20
                              , Css.margin <| Css.px 20
                              ]
                            ]
                        )
                    ]
                    [ repoRender repo ]
            )
        |> Html.ul
            [ css
                [ Css.listStyleType <| Css.none
                , Css.paddingLeft <| Css.px 0
                , Tw.grid_cols_2
                , Tw.grid
                , Tw.gap_0
                , Media.withMedia [ Media.only Media.screen [ Media.maxWidth (Css.px 1200) ] ]
                    [ Tw.grid_cols_1 ]
                ]
            ]


repoRender : Repo -> Html.Html msg
repoRender repo =
    Html.div
        [ css
            [ Tw.grid
            , Tw.auto_rows_fr
            , Tw.gap_0
            ]
        ]
        [ Html.p [ css [ Tw.self_start ] ]
            [ Html.text repo.name
            ]
        , Html.p [ css [ Tw.self_start ] ]
            [ case repo.description of
                Just desc ->
                    Html.text desc

                Nothing ->
                    Html.text ""
            ]
        , Html.a
            [ href repo.url
            , css
                [ Css.textDecoration <| Css.none
                , Css.backgroundColor <| Css.hex "cce7ff"
                , Css.borderRadius <| Css.px 5
                , Css.border <| Css.px 0
                , Css.padding2 (Css.rem 0.5) (Css.rem 1)
                ]
            ]
            [ Html.text "goto"
            ]
        ]
