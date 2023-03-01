module Components.About exposing (..)

import Browser
import Components.Paper exposing (paper)
import Css
import Css.Global
import Html.Styled as Html
import Html.Styled.Attributes exposing (css)
import Html.Styled.Events exposing (onClick)
import Tailwind.Utilities as Tw
import Utils.Texts exposing (text1, text2)


about =
    Html.div
        [ css
            (List.concat
                [ paper
                , [ Css.margin <| Css.px 15
                  , Css.padding <| Css.px 50
                  , Css.fontSize <| Css.px 20
                  , Tw.grid
                  , Tw.auto_rows_fr
                  , Tw.gap_0_dot_5
                  ]
                ]
            )
        ]
        [ Html.p []
            [ Html.text text1
            ]
        , Html.p []
            [ Html.text text2
            ]
        ]
