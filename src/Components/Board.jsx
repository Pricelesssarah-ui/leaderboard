import React, { useState } from "react";
import { Leaderboard } from "./database";





function Board() {


    const [query, setQuery] = useState("");



    return(
        <div className="board">
            <h1 className="leaderboard">Leaderboard</h1>

            <input type="text" 
            placeholder="search..."  
            className="search"
            onChange={(e) => setQuery(e.target.value)}
            />




            <div className="topics">

                <table className="container">
                    <thead>
                    <tr>
                        <th>Full-name</th>
                        <th>Photo</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Location</th>
                        <th>Scores</th>
                    </tr>
                    </thead>


                    <tbody>
                        {
                            Leaderboard.filter(leaderboard => leaderboard.fullname.toLowerCase().includes(query)).map((Leaderboard) =>(
                            <tr key={Leaderboard.id}>
                                <td>{Leaderboard.fullname}</td>
                                <td> <img src={Leaderboard.img} alt="" /></td>
                                <td>{Leaderboard.email}</td>
                                <td>{Leaderboard.telephone}</td>
                                <td>{Leaderboard.location}</td>
                                <td>{Leaderboard.score}</td>
                            </tr>)
                            )
                        }
                       
                    </tbody>

                    
                </table>



                


            </div>




         



        
        </div>
    )
}

    

   

export default Board;