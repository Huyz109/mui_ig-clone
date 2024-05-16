import styled from "styled-components";

const SidebarSlide = styled.div`
  width: 240px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  border-right: 1px solid rgb(219, 219, 219);
  display: flex;
  flex-direction: column;

  img {
    width: 50%;
  }

  .menu-list {
    text-align: left;
    .menu-item {
        display: flex;
        align-items: center;
    }

    .menu-item-icon {
        svg {
            height: 30px;
            width: 30px;
        }
    }
  }

`

export {SidebarSlide}