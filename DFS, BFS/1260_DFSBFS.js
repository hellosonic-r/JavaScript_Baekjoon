/* 큐 구현 */
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

/* dfs 함수 정의 */
function dfs(curr) { // curr: 현재 정점
    for (let next of graph[curr]) { // 현재 정점과 연결된 정점 확인
        if (visited[next] == 0) { // 다음 정점이 방문 안되어있다면 
            visited[next] = 1; // 방문처리
            dfsResult.push(next); // dfs 결과 배열에 다음 정점 추가
            dfs(next); // 다음 정점 방문
        }
    }
}

/* bfs 함수 정의 */
function bfs(curr) { // curr : 현재 정점
    const queue = new Queue(); // 빈 큐 생성
    queue.enqueue(curr); // 큐에 현재 정점 담음
    visited2[curr] = 1; // 현재 정점 방문 처리
    bfsResult.push(curr); // bfs 결과 배열에 현재 정점 추가
    while (queue.size() != 0) { // 큐가 빌 때 까지 반복 (이부분 더 깔끔하게 하고싶어요)
        let num = queue.dequeue(); // 큐에서 하나씩 꺼내어 확인한다.
        for (let next of graph[num]) {  // 현재 정점과 연결된 정점 확인
            if (visited2[next] == 0) { // 다음 정점이 방문 안되어있다면
                visited2[next] = 1; // 방문처리
                queue.enqueue(next); // 큐에 다음 정점 추가
                bfsResult.push(next); // bfs 결과 배열에 다음 정점 추가
            }
        }
    }
}

/* 입력받는 부분 */
let fs = require('fs');
let input = fs.readFileSync('./DFS, BFS/dev/stdin').toString().trim().split('\n');
let info = input[0].split(" ").map(Number);
const [n, m, v] = info; // n: 정점, m: 간선, v: 탐색시작 정점

const graph = Array.from({length:n+1}, ()=> []); // 정점과 간선 정보를 담을 graph 배열

// 그래프에 정점과 간선 정보를 담는다.
// 이때 그래프의 인덱스는 정점 번호, 그래프의 인덱스의 값은 정점과 연결된 다른 정점의 번호이다.
// 양방향이므로 start, end 바꿔가며 담는다.
for (let i = 1; i < input.length; i++) {
    let [start, end] = input[i].split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

// 정점 번호가 작은 것부터 먼저 방문하기 위해 오름차순 정렬
graph.map(element => {
    element.sort((a,b) => a-b)
});


/* 구현 */
const dfsResult = [v]; // dfs 결과를 담기위한 배열 초기화, 이 때 시작 정점은 담아둔다.
// dfs 수행 시 정점의 방문 정보를 담기 위한 visited 배열
let visited = Array.from( {length: n+1}, () => 0);
visited[v] = 1; // 현재 정점은 담았으므로 1(방문) 처리
dfs(v); // dfs 수행
console.log(dfsResult.join(" ")); // dfs 수행 결과 출력

const bfsResult = []; // bfs 결과 배열
let visited2 = Array.from( {length: n+1}, ()=>0); // bfs 수행 시 방문 체크 배열

bfs(v); // bfs 수행
console.log(bfsResult.join(" ")); // bfs 수행 결과 출력