from flask import Flask, render_template, request

app = Flask(__name__)

messages = []

@app.route('/')
def index():
    return render_template('index.html', messages=messages)

@app.route('/send', methods=['POST'])
def send():
    message = request.form['message']
    messages.append(message)
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
