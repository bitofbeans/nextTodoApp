function Home({ data }) {

    const name = data.name;
    return (
        <main>
            <h1>Home</h1>
            <p>His name was {name}</p>
        </main>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api`);
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}

export default Home;
