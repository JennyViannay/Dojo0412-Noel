import React from "react";
import axios from "axios";
import Gift from "../bothUse/Gift";
import ChildProfile from "./ChildProfile";

class GiftList extends React.Component {
    state = {
        gifts: [],
        childs: [],
        isLoaded: false
    };

    componentDidMount() {
        this.getGifts();
    }

    getGifts = () => {
        axios
            .get(`http://localhost:4000/giftlutin/getgifts`)
            .then(response => response.data)
            .then(data => {
                this.setState({ gifts: data, isLoaded: true });
            });
    };

    getChildProfile = id => {
        axios
            .get(`http://localhost:4000/giftlutin/getchild/` + id)
            .then(response => response.data)
            .then(data => {
                this.setState({ childs: data, isLoaded: true });
            });
    };

    getDoingGift = (giftId) => {
        const lutinId = this.getRandomIdLutin();
        axios
            .put(`http://localhost:4000/giftlutin/${giftId}/${lutinId}`)
            .then(response => response.data)
            .then(() => {
                window.location.reload()
            });
    };

    getDoneGift = id => {
        axios
            .put(`http://localhost:4000/giftlutin/` + id)
            .then(response => response.data)
            .then(() => {
                window.location.reload()
            });
    };

    deleteGift = id => {
        axios
            .delete(`http://localhost:4000/giftlutin/delete/` + id)
            .then(response => response.data)
            .then(() => {
                window.location.reload()
            });
    };

    getRandomIdLutin = () => {
        const int = Math.round(Math.random() * 10)
        return int
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.isLoaded ? (
                            this.state.gifts
                                .map((gift, i) => (
                                    <Gift
                                        key={gift.id}
                                        id={gift.id}
                                        name={gift.name}
                                        child_id={gift.child_id}
                                        lutin={gift.lutin_id}
                                        status={gift.status_id}
                                        infos={() => this.getChildProfile(gift.child_id)}
                                        delete={() => this.deleteGift(gift.id)}
                                        doing={() => this.getDoingGift(gift.id, gift.lutin_id)}
                                        done={() => this.getDoneGift(gift.id)}
                                    />
                                ))
                        ) : (
                                <p>Loading...</p>
                            )}
                    </div>
                    {this.state.isLoaded ? (
                            this.state.childs
                                .map((child, i) => (
                                    <ChildProfile
                                        key={child.id}
                                        id={child.id}
                                        firstname={child.firstname}
                                        score={child.wisdom_level}
                                    />
                                ))
                        ) : (
                                <p>Loading...</p>
                            )}
                </div>
            </div>
        );
    }
}

export default GiftList;