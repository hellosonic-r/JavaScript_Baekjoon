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
        this.front++
        return value; 
    }

    size() {
        return this.rear - this.front;
    }
}

/* 입력 받는 부분 */
let fs = require('fs');
let input = fs.readFileSync('./DFS, BFS/dev/stdin').toString().trim().split('\n');
let testcases = parseInt(input[0]);

let idx = 1;

while (testcases--) {
    let [m, n, k] = input[idx].split(" ").map(Number);
    let board = Array.from( {length : n}, () => Array(m).fill(0));

    for (let i = 1; i <= k; i++) {
        let [x,y] = input[idx + i].split(" ").map(Number);
        board[y][x] = 1;
    }

    idx += k + 1;
    console.log(solution(n,m,k,board));
}

/* 구현 */
function solution(n, m, k, board) { // n: 세로, m: 가로, board: 배추밭 정보
    let visited = Array.from( {length : n}, () => Array(m).fill(0)); // 방문 정보 체크를 위한 배열
    let cnt = 0; // 지렁이 마리수
    // 방향 벡터
    const dx = [0,1,0,-1];
    const dy = [-1,0,1,0];

    // bfs 함수 정의
    function bfs(sx,sy, board, visited) {
        const queue = new Queue(); // 빈 큐 생성
        queue.enqueue([sx,sy]); // 큐에 시작 좌표 넣는다
    
        while(queue.size() != 0) { // 큐가 빌 때까지
            const [x,y] = queue.dequeue(); // 큐의 좌표를 하나씩 꺼냄
            for (let i = 0; i < 4; i++) { // 동서남북 네 방향 탐색
                let nx = x + dx[i];
                let ny = y + dy[i];
                if (nx < 0 || ny < 0 || nx >= m || ny >= n) { // 배추밭 벗어나면
                    continue; // 다음 방향 탐색
                } else {
                    if (board[ny][nx] == 1 && visited[ny][nx] == 0) { // 다음 좌표에 지렁이가 퍼져있고, 방문하지 않은 곳이라면
                        board[ny][nx] = 0; // 다음 좌표에 배추 있다고 바꾼다
                        visited[ny][nx] = 1; // 방문 처리 해준다
                        queue.enqueue([nx, ny]); // 다음 좌표를 큐에 넣는다.
                    }
                }
            }
        }
    }

    // 배추밭 탐색
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] == 1 && visited[i][j] == 0) { // 지렁이가 있고 방문 안한 좌표라면
                bfs(j, i, board, visited); // 너비우선 탐색 수행
                cnt += 1; // 지렁이 개수 증가
            }
        }
    }

    return cnt;
}
