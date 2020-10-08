


exports.toUrl = function (mainLink, path) {

    var link = path === null ? "https://studio.blackboard-th.iceberg.fun/static/media/Logo2.8508452e.png" : !path.startsWith('https://') ? `${mainLink}/${path}` : path
    return link
}