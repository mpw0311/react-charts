export const request = async () => {
    if (this.state.data === undefined) {
        const data = await fetch('https://randomuser.me/api/').then(res => res.json());
        console.log(data);
        this.setState({
            data
        });
    }
};