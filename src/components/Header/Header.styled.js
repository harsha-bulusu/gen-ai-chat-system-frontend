import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 45px;
  object-fit: cover;
`;

export const LogoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
`;

export const ProfileContainer = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  background: transparent;
`

export const HeaderOptionsContainer = styled.div`
  display: flex;
  flex-direction:row;
  gap: 50px;
  margin-right: 10px;
`

export const ThemeSwitchContainer = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: #fff;
  background: transparent;
`

export const UserProfileOptionscontainer = styled.div`
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`

export const UserProfileOption = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`

export const UserProfileOptionIcon = styled.div`
  font-size: 20px;
`

export const UserProfileOptionTitle = styled.div`
`