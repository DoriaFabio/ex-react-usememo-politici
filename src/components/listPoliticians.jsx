import CardPoliticians from "./CardPoliticians";

export default function ListPoliticians({ list }) {
    return (
        <section>
            <h1 className='font-bold text-3xl text-center my-3'>Lista di politici</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {list.map((politic) => (
                    <div key={politic.id}>
                        <CardPoliticians politic={politic} />
                    </div>
                ))}
            </div>
        </section>
    );
}