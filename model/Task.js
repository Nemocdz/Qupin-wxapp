/**
 * Created by Peng on 2016/12/17.
 */

const AV = require('../libs/av-weapp');

class Task extends AV.Object {
    get objectId() {
        return this.get('objectId');
    }

    get day() {
        return this.get('day');
    }

    set day(value) {
        this.set('day', value);
    }

    get title() {
        return this.get('title');
    }

    set title(value) {
        this.set('title', value);
    }

    get money() {
        return this.get('money');
    }

    get pic() {
        if (this.get('pic')) {
            return this._serverData.pic.attributes.url;
        } else {
            return null;
        }
    }

    get url() {

    }

}

AV.Object.register(Task);
module.exports = Task;