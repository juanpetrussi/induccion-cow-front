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

        fetch('http://localhost:4567/induccion/punto1/front', {
            method : "POST"
        }).then((result) => result.json())
            .then((init_point_resp) => {
                this.setState({ init_point : init_point_resp.description });
/*
                this.createButtonPunto5();
*/
            })
    }

    /*createButtonPunto5() {
        var form5 = document.createElement("form");
        form5.action = "http://localhost:4567/induccion/punto5";
        form5.method = "POST";

        var script5 = document.createElement("script");
        script5.setAttribute('src', 'https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js');
        script5.setAttribute('data-preference-id', this.state.preferenceId);

        form5.appendChild(script5);
        document.querySelector("#divPunto5").appendChild(form5);
    }*/

    render() {
        return (
            <div>
                <h3>Punto 1 - Checkout básico</h3>
                <h3>Preferencia Generada (initpoint)</h3><p>{this.state.init_point} - <a href={this.state.init_point} name="MP-Checkout" className="mercadopago-button">Pay</a></p>

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