const base_url = "https://api.github.com/";


function main() {

}


function ajaxFunction(target) {
    $.ajax({
        url: target,
        method: 'GET',
        dataType: 'json',
        success: function(res) {
            return res;
        },
        error: function (error){
            console.error("some error while fetching");
        }
    });
}


function getUser(username) {
    let sub_url = `users/${username}`;
    return ajaxFunction(base_url + sub_url);
}


function getRepos(username) {
    let sub_url = `users/${username}/repos`;
    return ajaxFunction(base_url + sub_url);
}

function getRepo(username, repo_name) {
    let sub_url = `users/${username}/${repo_name}`;
    return ajaxFunction(base_url+sub_url);
}

function getCommits(username, repo_name) {
    let sub_url = `repos/${username}/${repo_name}/commits`
    return ajaxFunction(base_url+sub_url);
}

function getCommitMessages(username, repo_name) {
    let commitsJSON = getCommits(username, repo_name);

    
}






main();