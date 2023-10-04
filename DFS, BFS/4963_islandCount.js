/* Queue 구현 */
class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }
    
    size() {
        return this.rear - this.front;
    }
}


/* 입력 받는 부분 */
let fs = require('fs');
let input = fs.readFileSync('./DFS, BFS/dev/stdin').toString().trim().split('\n');

let idx = 0;

while (true) {
    let [w, h] = input[idx++].split(" ").map(Number);
    if (w == 0 && h == 0) break;

    let board = [];
    for (let i = 0; i < h; i++) {
        board.push(input[idx++].split(" ").map(Number));
    }

    console.log(solution(w, h, board));
}

/* 구현 */
function solution(w, h, board) { // w: 너비 h: 높이 board: 지도
    // 방향벡터
    const dx = [0,1,0,-1,1,1,-1,-1]; 
    const dy = [-1,0,1,0,-1,1,1,-1];
    // 방문 정보를 체크하기 위한 visited 배열
    let visited = Array.from( { length : h }, ()=> Array(w).fill(0) );

    // 지도를 탐색하기 위한 bfs 좌표
    function bfs(sx,sy) {
        let queue = new Queue(); // 빈 큐
        visited[sy][sx] = 1; // 시작 좌표 방문처리
        board[sy][sx] = 0; // 방문한 지도를 바다로 바꾼다
        queue.enqueue([sx,sy]); // 시작 좌표 큐에 삽입
        while (queue.size() != 0) { // 큐가 빌 때까지 수행
            const [x, y] = queue.dequeue(); // 큐에서 좌표를 꺼낸다.
            for (let i = 0; i < 8; i++) { // 동서남북,대각선 까지 8방향 모두 탐색
                const nx = x + dx[i]; // 다음 x좌표
                const ny = y + dy[i]; // 다음 y좌표
                if (nx < 0 || ny < 0 || nx >= w || ny >= h) { // 다음 좌표가 지도를 벗어나면
                    continue; // 다음 방향 탐색
                } else {
                    if (board[ny][nx] == 1 && visited[ny][nx] == 0) { // 다음 좌표가 땅이고 방문하지 않았다면
                        visited[ny][nx] = 1; // 방문처리
                        board[ny][nx] = 0; // 바다로 바꾼다
                        queue.enqueue([nx, ny]); // 다음 좌표 큐에 넣는다.
                    }
                }
            }
        }
    }

    let cnt = 0; // 섬의 개수를 초기화
    // 이중 for문으로 각 좌표를 탐색하면서 땅인 부분이라면 bfs 수행 -> cnt 값 증가
    for (let i = 0; i < h; i++){
        for (let j = 0; j < w; j++){
            if (board[i][j] == 1) {
                bfs(j,i);
                cnt+=1;
            }
        }
    }

    return cnt;
}

