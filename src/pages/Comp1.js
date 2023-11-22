// Competition.js

import React, { useState } from 'react';
import Footer from '../Component/Footer';
import './Competition.css';

const Competition = () => {
    // State to manage form input values
    const [competitionDetails, setCompetitionDetails] = useState({
        title: '',
        description: '',
        photo: null,
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        setCompetitionDetails((prevDetails) => ({
            ...prevDetails,
            [name]: files ? files[0] : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform submission logic here
        console.log('Competition Details:', competitionDetails);
        // Add logic to send data to the server or perform other actions
    };

    return (
        <div className="competition-container">
            <header>
                <h1>Winter Landscapes</h1>
                <p>Minimalism is the order of the day for this round. Make a feature out of negative space, focus on frozen details and work in dramatic weather for atmospheric shots.</p>
            <br></br>
            <b>Expert winners will receive a licence to Affinity Photo professional editing software. The top 3 will also be published in a future issue of Digital Photographer magazine.</b>

               <b> Win a licence to Affinity Photo professional editing software. Award-winning Affinity Photo continues to push the boundaries for professional photo editing software.</b><br></br>

                <b>Available for a one-off £48.99 on Mac or Windows, and £19.99 for iPad, its huge toolset is engineered for modern photography professionals. Whether you’re editing and retouching images or creating full-blown multi-layered compositions, it has all the power and performance you’ll ever need.</b>
                <br></br>

                <b>Speed, power and accuracy are at the heart of Affinity Photo’s workflow, with non-destructive editing, RAW processing and end-to-end colour management as standard. Edits work in real time, so there’s no waiting to see results.</b>
                </header>
            <br></br><br></br><section className="competition-form">
                <h2>Enter A Photo</h2>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="title">Title:</label></td>
                                <td>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={competitionDetails.title}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="description">Description:</label></td>
                                <td>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={competitionDetails.description}
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="photo">Upload Photo:</label></td>
                                <td>
                                    <input
                                        type="file"
                                        id="photo"
                                        name="photo"
                                        accept="image/*"
                                        onChange={handleInputChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">Submit</button>
                </form>

            </section>
        </div>
    );
};
<Footer />
export default Competition;
