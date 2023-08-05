import React, {useEffect} from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import {
    IconPlayNextTrack,
    IconPlayPrevTrack,
    IconPlayRandomTrack,
    IconPlayRepeatTrack,
    IconPlaySound
} from "./ui/icons";

import * as S from "./styles";
import {ButtonPlay} from "./styles";

const TrackPlayNextStop = () => {
    const  { load, setVolume, togglePlayPause, volume, duration, getPosition}  =  useGlobalAudioPlayer();

    useEffect(() => {
        setVolume(0.1);
        load("/aue"/*"https://stream.toohotradio.net/128"*/, {
            autoplay: true,
            html5: true,
            format: "mp3",
            initialVolume: volume
        });
    }, []);

    useEffect(() => {
        console.log("duration", duration)
        console.log("getPosition", getPosition())
    }, [duration, getPosition]);

    console.log(volume);

    //TODO предыдущий, случайный, следующий пока не реализуемы т.к нет плейлиста самого

    return (
        <S.Wrapper>
            <S.WrapperTrackControl>
                <S.LeftControl>
                    <IconPlayRandomTrack onClick={()=>setVolume(0.5)}/>
                    <IconPlayPrevTrack/>
                </S.LeftControl>
                <ButtonPlay onClick={togglePlayPause}>
                    <IconPlaySound/>
                </ButtonPlay>

                <S.RightControl>
                    <IconPlayNextTrack/>
                    <IconPlayRepeatTrack/>
                </S.RightControl>
            </S.WrapperTrackControl>
        </S.Wrapper>
    );
};

export default TrackPlayNextStop;