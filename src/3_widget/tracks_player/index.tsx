import React from 'react';

import TrackPlayNextStop from 'features/TrackPlayNextStop';
import {api} from "shared/api";

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