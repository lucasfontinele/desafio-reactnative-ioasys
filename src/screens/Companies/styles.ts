import styled from 'styled-components/native';

import { CompanyCard as CompanyCardComponent } from '../../components/CompanyCard';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  padding: 24px;
`;

export const TitleContainer = styled.View``;

export const SearchContainer = styled.View`
  margin-top: 20px;
`;

export const CompanyCard = styled(CompanyCardComponent)`
  margin: 0 auto 20px;
`;
