module Components.Paper exposing (..)

import Browser
import Css
import Css.Global
import Html.Styled as Html
import Html.Styled.Attributes exposing (css)
import Html.Styled.Events exposing (onClick)
import Tailwind.Utilities as Tw


paper =
    [ Css.boxShadow5 (Css.px 5) (Css.px 4) (Css.px 12) (Css.px 2) (Css.rgba 0 0 0 0.75)
    , Css.borderRadius <| Css.px 5
    , Css.backgroundColor <| Css.hex "#ffffff"
    ]
