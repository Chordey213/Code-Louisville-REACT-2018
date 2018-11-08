module.exports = {

    publicKey: function () {
        return '5ef86689af1d8abd822d2eeb00844eda';
    },

    appendParam: function (uriString, paramName, paramValue) {
        if (uriString.includes('?')) {
            return uriString + '&' + paramName + '=' + encodeURI(paramValue);
        } else {
            return uriString + '?' + paramName + '=' + encodeURI(paramValue);
        }
    },

    urlWithPublicKey: function (uriString) {
        return this.appendParam(uriString, 'apikey', this.publicKey());
    }
};