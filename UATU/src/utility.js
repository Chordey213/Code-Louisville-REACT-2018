class requestUtility {
    // constructor() {

    // }

publicKey() {
    return '5ef86689af1d8abd822d2eeb00844eda'
};

appendParam(uriString, paramName, paramValue) {
    if (uriString.includes('?')) {
        return uriString + '&' + paramName + '=' + encodeURI(paramValue);
    } else {
        return uriString + '?' + paramName + '=' + encodeURI(paramValue);
    }
};

urlWithPublicKey(uriString) {
    return this.appendParam(uriString, 'apiKey', this.publicKey());
};
}
export default requestUtility;