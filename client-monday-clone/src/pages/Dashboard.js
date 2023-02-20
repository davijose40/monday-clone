import TicketCard from "../components/TicketCard"


const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'NFT Safety 101 Video',
            owner: 'Ania Kubow',
            avatar: 'https://i.pravatar.cc/150?img=32',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'Make a video of the NFT Safety 101',
            timestamp: '2022-01-01T07:36:17+0000'
        },
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'Build and sell AI Model',
            owner: 'Ania Kubow',
            avatar: 'https://i.pravatar.cc/150?img=32',
            status: 'working on it',
            priority: 2,
            progress: 70,
            description: 'Make a video about the AI Model',
            timestamp: '2022-02-13T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'Build a bot',
            owner: 'Ania Kubow',
            avatar: 'https://i.pravatar.cc/150?img=32',
            status: 'working on it',
            priority: 3,
            progress: 10,
            description: 'Make a video about Chat bot',
            timestamp: '2022-03-15T07:36:17+0000'
        }
    ]

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]  

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]

    console.log(uniqueCategories)

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategorie, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategorie}</h3>
                       {tickets.filter(ticket => ticket.category === uniqueCategorie)
                        .map((filteredTicket, _index) => (
                            <TicketCard
                             id={_index}
                             color={colors[categoryIndex] || colors[0]}
                             ticket={filteredTicket}
                            />
                        ))
                       }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard