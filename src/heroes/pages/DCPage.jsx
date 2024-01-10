import { HeroList } from '../components/HeroList';

export const DCPage = () => {
    return (
        <>
            <h1>DC Heroes</h1>
            <hr />

            <HeroList publisher={'DC Comics'} />
        </>
    );
};
