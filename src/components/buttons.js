import React, { Component } from 'react';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {init_point : null, preferenceId : null};
    }

    componentWillMount () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = "(function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = document.location.protocol+'//secure.mlstatic.com/mptools/render.js';var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();";
        document.body.appendChild(script);

        fetch('http://localhost:4567/induccion/punto1', {
            method : "POST"
        })
        .then((result) => result.json())
            .then((init_point_resp) => {
                this.setState({ init_point : init_point_resp.initPoint, preferenceId : init_point_resp.id  });
            })
    }

    render() {
        return (
            <div>
                <h3>Punto 1 - Checkout básico</h3>
                <h3>Preference Id</h3><p>{this.state.preferenceId}</p>
                <h3>Preferencia Generada</h3><p>{this.state.init_point} - <a href={this.state.init_point} name="MP-Checkout" className="mercadopago-button">Pay</a></p>

                <h3>Punto 2 - Web Payment Checkout (V1)</h3>
                <a href={this.state.init_point} name="MP-Checkout" className="green-L-Rn" mp-mode="blank">Pagar (Blanck)</a>
                <a href={this.state.init_point} name="MP-Checkout" className="green-L-Rn" mp-mode="popup">Pagar (Popup)</a>
                <a href={this.state.init_point} name="MP-Checkout" className="orange-S-Sq-Ar" mp-mode="modal">Pagar (Modal)</a>
                <a href={this.state.init_point} name="MP-Checkout" className="lightblue-M-Ov-ArOn" mp-mode="redirect">Pagar (Redirect)</a>
            </div>
        );
    }
}

export default Buttons;