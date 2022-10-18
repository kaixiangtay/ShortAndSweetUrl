export default class UrlResponseService {
    sendBadRequest(error) {
        return { error: true, msg: error };
    }

    sendError(msg) {
        return { error: true, msg: msg };
    }

    sendSuccess(msg, data) {
        return { error: false, msg: msg, url: data };
    }
}
