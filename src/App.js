import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Board from './components/Board';
import Turn from './components/Turn';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Header = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Content = styled.div``;

const Footer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.a`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  border: 3px solid black;
  border-radius: 6px;
  padding: 4px 16px;
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

const StatusText = styled.div`
  text-align: center;
  padding: 8px;
`;

const CHAR = {
  circle: '○',
  cross: '×',
};

const STATUS_TEXT = {
  progressing: 'progressing',
  win: 'win',
  draw: 'draw',
};

const initialState = {
  winner: null,
  turn: CHAR.circle,
  progress: true,
  statusText: STATUS_TEXT.progressing,
  handCount: 0,
  isCircleTurn: true,
  board: new Array(9),
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  onRestart = () => {
    this.setState({ ...initialState });
  };

  onClick = (index) => {
    const { board, handCount, progress, turn } = this.state;
    if (board[index] || !progress) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    this.setState({
      board: newBoard,
      handCount,
      turn: turn === CHAR.circle ? CHAR.cross : CHAR.circle,
    });

    if (checkWinner(newBoard, turn, index)) {
      this.setState({
        progress: false,
        winner: turn,
        statusText: turn + ' ' + STATUS_TEXT.win,
      });
      return;
    }

    if (checkDraw(newBoard)) {
      this.setState({
        progress: false,
        statusText: STATUS_TEXT.draw,
      });
      return;
    }
  };

  render() {
    const { turn, board, statusText } = this.state;

    return (
      <Container>
        <Content>
          <GlobalStyle />
          <Header>
            <Title>Tic Tac Toe</Title>
            <Turn turns={Object.values(CHAR)} turn={turn} />
          </Header>
          <Board board={board} onClick={this.onClick} />
          <Footer>
            <StatusText>{statusText}</StatusText>
            <Button onClick={this.onRestart}>Restart</Button>
          </Footer>
        </Content>
      </Container>
    );
  }
}

const checkWinner = (board, value) => {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 8],
  //   ];
  //   return lines.every((item) => board[item] === value);

  return (
    [0, 1, 2].every((item) => board[item] === value) ||
    [3, 4, 5].every((item) => board[item] === value) ||
    [6, 7, 8].every((item) => board[item] === value) ||
    [0, 3, 6].every((item) => board[item] === value) ||
    [1, 4, 7].every((item) => board[item] === value) ||
    [2, 5, 8].every((item) => board[item] === value) ||
    [0, 4, 8].every((item) => board[item] === value) ||
    [2, 4, 6].every((item) => board[item] === value)
  );
};

const checkDraw = (board) => {
  return board.every((item) => item);
};
