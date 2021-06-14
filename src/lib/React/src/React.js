class Component {
    constructor(props = {}, state = {}) {
        this.props = props
        this.state = state
    }



    update() {

    }
    #updater() {
        this.update(this.render())
        this.componentDidUpdate()
    }

    componentWillMount() {

    }

    componentDidMount() {

    }
    componentDidUpdate() {

    }
    setState(newState) {
        this.state = {
            ...this.state,
            ...newState
            
        }

        this.#updater()
    }

    build(){
        this.componentWillMount()
        return this.render()
    }
 }

export {
    Component
}