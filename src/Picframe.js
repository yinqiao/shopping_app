import React,{Component} from 'react'
import styles from './General.css'

class Picframe extends Component{

    handleClick(){
        this.props.addToCart(this.props.index1);
    }

    
    render(){
        let popid = this.props.name + this.props.index1;
        return(
            
            <div className='col-md-6 col-sm-8 col-xs-8'>
            <div style={{'paddingRight':'0','marginRight':'0'}}>
                <img src={this.props.source} style={{ cursor: "pointer",width: 200 }} data-toggle="modal" data-target={"#"+popid}/>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4 style={{'color':'green'}}>{this.props.name}</h4>
                        <h5>Qty: {this.props.quantity}</h5>
                    </div>
                    <div>
                        <button onClick={this.handleClick.bind(this)} className='btn btn-success'><span>Add To Cart</span></button>
                    </div>
                    
                </div>
                <div className={styles.clear}></div>
                <div className="modal fade" id={popid} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	                <div className="modal-dialog">
                            <img src={this.props.source} className={styles.imgPop}/>
                    </div>
                </div>
                </div>
            </div>
            
        )
    }
}

export default Picframe