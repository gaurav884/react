import React, { Component } from 'react'
import themeContext from "../themeContext"

export default class Photos extends Component {

    static context = themeContext
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            allphotos: [],
            input: "",
            counter: 0
        }
        this.inputHandler = this.inputHandler.bind(this)
    }




    componentDidMount() {

        this.counterInterval = setInterval(() => {
            this.setState((prev) => ({
                counter: prev.counter + 1
            }))
        }, 1000)

        fetch("https://jsonplaceholder.typicode.com/photos").then((res) => {
            if (!res.ok) {
                throw new Error("cannot get request")
            }
            return res.json()
        }).then((data) => {

            data.splice(500, 5000)
            this.setState({ allphotos: data })
            this.setState({ photos: data })
        }).catch(e => {
            console.log(e.message)
        })
    }





    componentDidUpdate(prevProps, prevState) {

        if (prevState.input != this.state.input) {

            const newdata = this.state.allphotos.filter((each) => {
                return each.title.includes(this.state.input)
            })

            this.setState({
                photos: newdata
            })
        }
    }





    componentWillUnmount() {
        clearInterval(this.counterInterval)
    }




    inputHandler(e) {
        this.setState({
            input: e.target.value
        })
    }


    render() {
        
        return (<>
            <h1 className="h1">{this.state.counter}</h1>
            <div className="inputContainer">
                <input type="text" value={this.state.input} onChange={(e) => { this.inputHandler(e) }} placeholder="Search here...." />
            </div>
            <div className="gridContainer">

                {this.state.photos &&
                    this.state.photos.map((each) => {
                        return <div className="eachPhotoCard" key={each.id}>
                            <img src={each.thumbnailUrl} alt={each.title} />
                            <h3>{each.title}</h3>
                        </div>
                    })
                }
            </div>
        </>
        )
    }
}
