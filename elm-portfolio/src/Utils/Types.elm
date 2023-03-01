module Utils.Types exposing (..)

import Api.ScalarCodecs


type alias User =
    { repos : List Repo }


type alias Repo =
    { name : String
    , description : Maybe String
    , url : String
    }
