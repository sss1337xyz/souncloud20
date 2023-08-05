import React from 'react';

import TrackPlayNextStop from "4_features/TrackPlayNextStop";

import {api} from "../../6_shared/api";

import * as S from './styles';

const TracksPlayer = () => {
    const simpleQuery = api.greeting.query();

    console.log(simpleQuery)

    return (
        <S.Wrapper>
            <TrackPlayNextStop />
        </S.Wrapper>
    );
};

export default TracksPlayer;