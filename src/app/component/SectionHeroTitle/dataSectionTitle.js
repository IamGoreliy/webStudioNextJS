import {Antenna, Astronaut, Clock, Diagram} from "@/creatorSVG";

export const dataCapabilities = [
    {
        id: 1,
        imgUrl:
            <Antenna
                style={{
                    width: '50px',
                    height: '50px',
                }}
            />,
        title: 'ВНИМАНИЕ К ДЕТАЛЯМ',
        desc: 'Идейные соображения, а также начало повседневной работы по формированию позиции.',
    },
    {
        id: 2,
        imgUrl:
            <Clock
                style={{
                    width: '50px',
                    height: '50px',
                }}
            />,
        title: 'ПУНКТУАЛЬНОСТЬ',
        desc: 'Задача организации, в особенности же рамки и место обучения кадров влечет за собой.',
    },
    {
        id: 3,
        imgUrl:
            <Diagram
                style={{
                    width: '50px',
                    height: '50px',
                }}
            />,
        title: 'ПЛАНИРОВАНИЕ',
        desc: 'Равным образом консультация с широким активом в значительной степени обуславливает.',
    },
    {
        id: 4,
        imgUrl:
            <Astronaut
                style={{
                    width: '50px',
                    height: '50px',
                }}
            />,
        title: 'СОВРЕМЕННЫЕ ТЕХНОЛОГИИ',
        desc: 'Значимость этих проблем настолько очевидна, что реализация плановых заданий.',
    },
];