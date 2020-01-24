import React from 'react';


var listOfImages1 = [];
var listOfImages2 = [];
var listOfImages3 = [];
class Pictures extends React.Component{
    state = {
        import: false
    }
    importAll(r){
        return r.keys().map(r);
    }
    componentDidMount(){
        var path = './manual-landscape-photos/'+this.props.level;
        console.log(path);
        listOfImages1 = this.importAll(
            require.context('./manual-landscape-photos/0', true, /\.(png|jpe?g|svg)$/));
        listOfImages2 = this.importAll(
            require.context('./manual-landscape-photos/1', true, /\.(png|jpe?g|svg)$/));
        listOfImages3 = this.importAll(
            require.context('./manual-landscape-photos/2', true, /\.(png|jpe?g|svg)$/));
        this.setState({import: true});
        console.log(listOfImages1,listOfImages2,listOfImages3)
    }

    render(){
        if (this.props.level === 0){
            return(
                <div>
                    {
                        listOfImages1.map(
                            (image, index) =>    
                            <img key={index} src={image} alt="info" height="260" width="380"/>)
                    }
                </div>
            )
        }
        if (this.props.level === 1){
            return(
                <div>
                    {
                        listOfImages2.map(
                            (image, index) =>    
                            <img key={index} src={image} alt="info" height="260" width="380"/>)
                    }
                </div>
            )
        }
        if (this.props.level === 2){
            return(
                <div>
                    {
                        listOfImages3.map(
                            (image, index) =>    
                            <img key={index} src={image} alt="info" height="260" width="380"/>)
                    }
                </div>
            )
        }
        
    }
}

export default Pictures;