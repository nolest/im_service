var project_list = {
    'sns-circle': {
        ak: '55795e42e2bac8416b6a50de67a1ee5833bf9ae6',
        sk: '4257b89d44355afffeb8404659b1bb45ed7efa71'
    },

    'facechat': {
        ak: '035655670287ef24269b5d82833ee536724e4e14',
        sk: '7a349073ac18466b310d7db788839418d8ff22a5'
    },

    'supe': {
        ak: '0bd9720edd3e2afebaa1666c3d76080e219a26a7',
        sk: '11f6d3e7552d088a0862013faf80d67e836729bf'
    },

    'yueus': {
        ak: 'd28c3528e24ef9da8e31c71cb28011424c7b1c20',
        sk: '29aeda735b9c5378261d4f8b68bb40fa3faf0e5f'
    },

    'supe-pro': {
        ak: '46293aaf9fd20034c503c062de75555a392c23b6',
        sk: 'a59f61a888cfa0cdb7e686f19eb72ca5b57887d6'
    },

    'supe-pro-qa': {
        ak: '548f98ba49baa47179dcdbff397d17bd01f874f8',
        sk: '3abb35146a67673886b3629d3e8a9762f195bc74'
    },

    'camhomme': {
        ak: 'ca95b17cdecc0a9d9837b4bbca797f9c31a17e2e',
        sk: '009632e6e211a5bf1806ed58054a0b0d0b459532'
    },

    'poco-photography': {
        ak: '505da48de9b193aa1db05ee8f520f357f88b5a3d',
        sk: 'b6af9af59a649d91c361962b5ca8e3b7d9ec1c28'
    }
}

function AuthEncrypt(project) {
    if (!project_list[project]) {
        throw 'Project name out of range.'
    }

    this.SHA1 = new Hashes.SHA1;
    this.project_setting = project_list[project];
}

AuthEncrypt.getProjects = function () {
    var result = [];
    for (var key in project_list) {
        result.push(key);
    }

    return result;
}

AuthEncrypt.prototype.toUri = function(origin_uri, identify) {
    var expire = Math.floor(Date.now() / 1000) + 120;
    var token_str = 'imsystem' + expire + identify + 'uriauth';
    console.log(token_str)
    var access_token = this.SHA1.hex_hmac(this.project_setting.sk, token_str);

    var real_uri = origin_uri + '?identify=' + identify + '&expire=' + expire + '&access_key=' + this.project_setting.ak + '&access_token=' + access_token;
    console.log(real_uri);
    return real_uri;
}

AuthEncrypt.prototype.toBodyParams = function(func_name, params) {
    var body = {
        time: Math.floor(Date.now() / 1000),
        params: params
    }

    var sign_str = 'imcore' + func_name + JSON.stringify(body.params) + body.time + 'bodyauth';
    console.log("Sign string: ", sign_str);
    var body_sign = this.SHA1.hex(sign_str);
    body['sign'] = body_sign;
    return body;
}

AuthEncrypt.prototype.toMqttPassword = function(identify) {
    var expire = Math.floor(Date.now() / 1000) + 120;
    var token_str = 'imsystem' + expire + identify + 'uriauth';
    var access_token = this.SHA1.hex_hmac(this.project_setting.sk, token_str);

    return JSON.stringify({
        identify: identify,
        expire: expire,
        access_key: this.project_setting.ak,
        access_token: access_token
    })
}

define('common:auth_encrypt', function(require, exports, module) {
    module.exports = AuthEncrypt;
})
