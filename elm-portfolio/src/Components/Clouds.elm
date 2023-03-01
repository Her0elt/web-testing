module Components.Clouds exposing (..)

import Browser
import Css
import Css.Global
import Html.Styled as Html
import Html.Styled.Attributes exposing (css, src)
import Tailwind.Utilities as Tw


clouds =
    Html.div
        [ css
            [ Css.position <| Css.fixed
            , Css.height <| Css.pc 100
            , Css.width <| Css.pc 100
            , Css.backgroundSize <| Css.cover
            , Css.display <| Css.inlineBlock
            , Css.zIndex <| -1
            ]
        ]
        [ Html.img [ src "Assets/clouds1000.png" ] []
        , Html.img [ src "Assets/clouds1000_blur3.png" ] []
        ]
