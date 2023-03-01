module Components.Header exposing (..)

import Browser
import Css
import Css.Global
import Html.Styled as Html
import Html.Styled.Attributes exposing (css)
import Html.Styled.Events exposing (onClick)
import Tailwind.Utilities as Tw


header showRepos func =
    Html.div
        [ css
            [ Css.marginTop <| Css.px 70
            , Css.marginLeft <| Css.px 25
            , Css.color <| Css.rgb 255 255 255
            ]
        ]
        [ Html.h1
            [ css
                [ Css.fontSize <| Css.px 90
                , Css.marginBottom <| Css.px 0
                ]
            ]
            [ Html.text "Hermann Elton"
            ]
        , Html.h2
            [ css
                [ Css.fontSize <| Css.px 40
                , Css.marginTop <| Css.px 5
                , Css.marginBottom <| Css.px 10
                ]
            ]
            [ Html.text "Computer science student at NTNU Trondheim"
            ]
        , Html.button
            [ onClick func
            , css
                [ Css.borderRadius <| Css.px 5
                , Css.border <| Css.px 0
                , Css.padding2 (Css.rem 0.5) (Css.rem 1)
                , Css.backgroundColor <| Css.hex "#ffffff"
                , Css.color <| Css.hex "#000000"
                ]
            ]
            [ if showRepos then
                Html.text "About me"

              else
                Html.text "Repos"
            ]
        ]
