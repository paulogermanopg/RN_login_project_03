import React from 'react';
import * as S from './styles';

export default function Sky() {
  // Função para gerar estrelas em posições aleatórias
  const generateStars = () => {
    let stars = [];
    for (let i = 0; i < 120; i++) {
      stars.push(
        <S.Star
          key={i}
          size={Math.random() * 3 + 2}
          top={Math.random() * 100}
          left={Math.random() * 100}
        />,
      );
    }
    return stars;
  };

  return (
    <S.Sky>
      {generateStars()}
      <S.MoonContainer>
        <S.Moon>
          <S.Crater size={20} top={30} left={40} />
          <S.Crater size={15} top={60} left={20} />
          <S.Crater size={10} top={70} left={70} />
        </S.Moon>
      </S.MoonContainer>
    </S.Sky>
  );
}
