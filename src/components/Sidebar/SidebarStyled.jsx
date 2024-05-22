import styled from "styled-components";

const SidebarSlide = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  border-right: 1px solid rgb(219, 219, 219);
  display: flex;
  flex-direction: column;
  padding: 8px;

  img {
    width: 70%;
    padding: 20px 14px 16px;
    margin-bottom: 19px;
  }

  .menu-list {
    text-align: left;

    .menu-item {
        display: flex;
        align-items: center;
        padding: 8px 14px 12px;
        margin: 4px 0;
        gap: 12px;
        cursor: pointer;
    }

    .menu-item:hover {
      background-color: rgba(0, 0, 0, .05);
      border-radius: 8px;
      .menu-item-icon {
        svg {
            height: 32px;
            width: 32px;
        }
      }
    }

    .menu-item-active {
      font-weight: 700;
    }

    .menu-item:last-of-type {
      margin-top: auto;
    }
    
  }

  svg {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 1025px) {
    width: 240px;

    .menu-item-text {
      display: inline-block;
    }

    .ig-icon {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    width: 80px;

    img {
      display: none;
    }

    .menu-item-text {
      display: none;
    }

    .ig-icon {
      display: block;
      padding: 20px 14px 16px;
      margin-bottom: 19px;
    }
  }

  @media (max-width: 760px) {
    width: 100%;
    height: fit-content;
    bottom: 0;
    display: block;
    background-color: white;
    z-index: 2;

    .ig-icon {
      display: none;
    }

    .menu-list {
      display: flex;
      justify-content: center;

      .hide-mobile {
        display: none;
      }
    }

    .search-bar {
      margin: 0 12px;
      background-color: rgb(239, 239, 239);
      
      input {
        padding: 8px;
      }
    }
    
  }

`

export {SidebarSlide}