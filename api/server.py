from flask import Flask, abort, request
app = Flask(__name__)

requests = [
    {
        "id": 1, 
        "title": "Request 1", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt ab eligendi ullam quas mollitia aut facilis consequatur quos sed et natus, praesentium ad magni aliquid explicabo atque obcaecati nam."
    }, 
    {
        "id": 2, 
        "title": "Request 2", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt ab eligendi ullam quas mollitia aut facilis consequatur quos sed et natus, praesentium ad magni aliquid explicabo atque obcaecati nam."
    }, 
    {
        "id": 3, 
        "title": "Request 3", 
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt ab eligendi ullam quas mollitia aut facilis consequatur quos sed et natus, praesentium ad magni aliquid explicabo atque obcaecati nam."
    }
]


@app.route("/api/v1/users/requests")
def all_requests():
    return requests


@app.route("/api/v1/users/requests/<request_id>")
def single_request(request_id):
    user_request = None
    for r in requests:
        if r['id'] == int(request_id):
            user_request = r
            break
    if user_request == None:
        abort(404)
    return user_request


@app.post("/api/v1/users/requests")
def create_request():
    user_request = request.get_json()
    user_request['id'] = len(requests)
    requests.append(user_request)
    return user_request


@app.put("/api/v1/users/requests/<request_id>")
def update_request(request_id):
    user_request = None
    for r in requests:
        if r['id'] == int(request_id):
            user_request = r
            break
    if user_request == None:
        abort(404)

    data = request.get_json()
    user_request['title'] = data['title']
    user_request['description'] = data['description']
    return user_request
