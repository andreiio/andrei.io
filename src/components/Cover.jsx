import { useState } from 'preact/hooks';

export default function Cover({ images }) {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;

            if (nextIndex >= images.length) {
                return 0;
            }

            return nextIndex;
        });
    };

    return (
        <div
            class="sticky top-0 hidden h-screen lg:block bg-black cursor-alias"
            role="presentation"
            onClick={nextImage}
        >
            <img
                class="object-cover object-left-top h-screen"
                src={images[index]}
                alt=""
            />
        </div>
    );
}
