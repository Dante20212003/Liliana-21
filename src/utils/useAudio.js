import { useMemo, useEffect, useState } from "react";

const useAudio = url => {
    const audio = useMemo(() => new Audio(url), []);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        setPlaying(!playing)
    };

    useEffect(() => {
        if (playing) {
            audio.loop = true
            audio.volume = 0.009;
            audio.play()
        } else audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

export default useAudio;
