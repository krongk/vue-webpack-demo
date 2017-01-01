<template>

</template>

<script>
  export default {
    name: 'list'
  }
</script>

<style>
/* === Lists === */
.list-block {
  margin: 35px 0;
  font-size: 17px;
}
.list-block ul {
  background: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}
.list-block ul:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
  height: 1px;
  width: 100%;
  background-color: #c8c7cc;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}
html.pixel-ratio-2 .list-block ul:before {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .list-block ul:before {
  -webkit-transform: scaleY(0.33);
  transform: scaleY(0.33);
}
.list-block ul:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
  height: 1px;
  width: 100%;
  background-color: #c8c7cc;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
html.pixel-ratio-2 .list-block ul:after {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .list-block ul:after {
  -webkit-transform: scaleY(0.33);
  transform: scaleY(0.33);
}
.list-block ul ul {
  padding-left: 45px;
}
.list-block ul ul:before {
  display: none;
}
.list-block ul ul:after {
  display: none;
}
.list-block .align-top,
.list-block .align-top .item-content,
.list-block .align-top .item-inner {
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}
.list-block.inset {
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 7px;
}
.list-block.inset .content-block-title {
  margin-left: 0;
  margin-right: 0;
}
.list-block.inset ul {
  border-radius: 7px;
}
.list-block.inset ul:before {
  display: none;
}
.list-block.inset ul:after {
  display: none;
}
.list-block.inset li:first-child > a {
  border-radius: 7px 7px 0 0;
}
.list-block.inset li:last-child > a {
  border-radius: 0 0 7px 7px;
}
.list-block.inset li:first-child:last-child > a {
  border-radius: 7px;
}
@media all and (min-width: 768px) {
  .list-block.tablet-inset {
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 7px;
  }
  .list-block.tablet-inset .content-block-title {
    margin-left: 0;
    margin-right: 0;
  }
  .list-block.tablet-inset ul {
    border-radius: 7px;
  }
  .list-block.tablet-inset ul:before {
    display: none;
  }
  .list-block.tablet-inset ul:after {
    display: none;
  }
  .list-block.tablet-inset li:first-child > a {
    border-radius: 7px 7px 0 0;
  }
  .list-block.tablet-inset li:last-child > a {
    border-radius: 0 0 7px 7px;
  }
  .list-block.tablet-inset li:first-child:last-child > a {
    border-radius: 7px;
  }
  .list-block.tablet-inset .content-block-title {
    margin-left: 0;
    margin-right: 0;
  }
  .list-block.tablet-inset ul {
    border-radius: 7px;
  }
  .list-block.tablet-inset ul:before {
    display: none;
  }
  .list-block.tablet-inset ul:after {
    display: none;
  }
  .list-block.tablet-inset li:first-child > a {
    border-radius: 7px 7px 0 0;
  }
  .list-block.tablet-inset li:last-child > a {
    border-radius: 0 0 7px 7px;
  }
  .list-block.tablet-inset li:first-child:last-child > a {
    border-radius: 7px;
  }
}
.list-block li {
  box-sizing: border-box;
  position: relative;
}
.list-block .item-media {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  -webkit-box-lines: single;
  -moz-box-lines: single;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: none;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  box-sizing: border-box;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 8px;
}
.list-block .item-media i + i {
  margin-left: 5px;
}
.list-block .item-media i + img {
  margin-left: 5px;
}
.list-block .item-media + .item-inner {
  margin-left: 15px;
}
.list-block .item-inner {
  padding-right: 15px;
  position: relative;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 7px;
  min-height: 44px;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  overflow: hidden;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -ms-flex-item-align: stretch;
  -webkit-align-self: stretch;
  align-self: stretch;
}
.list-block .item-inner:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
  height: 1px;
  width: 100%;
  background-color: #c8c7cc;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
html.pixel-ratio-2 .list-block .item-inner:after {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .list-block .item-inner:after {
  -webkit-transform: scaleY(0.33);
  transform: scaleY(0.33);
}
.list-block .item-title {
  -webkit-flex-shrink: 1;
  -ms-flex: 0 1 auto;
  flex-shrink: 1;
  min-width: 0;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.list-block .item-after {
  white-space: nowrap;
  color: #8e8e93;
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  margin-left: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  max-height: 28px;
}
.list-block .smart-select .item-after,
.list-block .autocomplete-opener .item-after {
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  display: block;
}
.list-block .item-link {
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
  display: block;
  color: inherit;
}
.list-block .item-link .item-inner {
  padding-right: 35px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
  background-size: 10px 20px;
  background-repeat: no-repeat;
  background-position: 95% center;
  background-position: -webkit-calc(100% - 15px) center;
  background-position: calc(100% - 15px) center;
}
html:not(.watch-active-state) .list-block .item-link:active,
.list-block .item-link.active-state {
  -webkit-transition-duration: 0ms;
  transition-duration: 0ms;
  background-color: #d9d9d9;
}
html:not(.watch-active-state) .list-block .item-link:active .item-inner:after,
.list-block .item-link.active-state .item-inner:after {
  background-color: transparent;
}
.list-block .item-link.list-button {
  padding: 0 15px;
  text-align: center;
  color: #007aff;
  display: block;
  line-height: 43px;
}
.list-block .item-link.list-button:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
  height: 1px;
  width: 100%;
  background-color: #c8c7cc;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
html.pixel-ratio-2 .list-block .item-link.list-button:after {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .list-block .item-link.list-button:after {
  -webkit-transform: scaleY(0.33);
  transform: scaleY(0.33);
}
.list-block .item-content {
  box-sizing: border-box;
  padding-left: 15px;
  min-height: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.list-block .list-block-label {
  margin: 10px 0 35px;
  padding: 0 15px;
  font-size: 14px;
  color: #8f8f94;
}
.list-block .swipeout {
  overflow: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.list-block .swipeout.deleting {
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
.list-block .swipeout.deleting .swipeout-content {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.list-block .swipeout.transitioning .swipeout-content,
.list-block .swipeout.transitioning .swipeout-actions-right a,
.list-block .swipeout.transitioning .swipeout-actions-left a,
.list-block .swipeout.transitioning .swipeout-overswipe {
  -webkit-transition: 300ms;
  transition: 300ms;
}
.list-block .swipeout-content {
  position: relative;
  z-index: 10;
}
.list-block .swipeout-overswipe {
  -webkit-transition: 200ms left;
  transition: 200ms left;
}
.list-block .swipeout-actions-left,
.list-block .swipeout-actions-right {
  position: absolute;
  top: 0;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.list-block .swipeout-actions-left a,
.list-block .swipeout-actions-right a {
  padding: 0 30px;
  color: #fff;
  background: #c7c7cc;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: relative;
  left: 0;
}
.list-block .swipeout-actions-left a:after,
.list-block .swipeout-actions-right a:after {
  content: '';
  position: absolute;
  top: 0;
  width: 600%;
  height: 100%;
  background: inherit;
  z-index: -1;
}
.list-block .swipeout-actions-left a.swipeout-delete,
.list-block .swipeout-actions-right a.swipeout-delete {
  background: #ff3b30;
}
.list-block .swipeout-actions-right {
  right: 0%;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.list-block .swipeout-actions-right a:after {
  left: 100%;
  margin-left: -1px;
}
.list-block .swipeout-actions-left {
  left: 0%;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.list-block .swipeout-actions-left a:after {
  right: 100%;
  margin-right: -1px;
}
.list-block .item-subtitle {
  font-size: 15px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  text-align: left;
}
.list-block .item-text {
  font-size: 15px;
  color: #8e8e93;
  line-height: 21px;
  position: relative;
  overflow: hidden;
  height: 42px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.list-block.media-list .item-title,
.list-block li.media-item .item-title {
  font-weight: 500;
}
html.ios-gt-8 .list-block.media-list .item-title,
html.ios-gt-8 .list-block li.media-item .item-title {
  font-weight: 600;
}
.list-block.media-list .item-inner,
.list-block li.media-item .item-inner {
  display: block;
  padding-top: 10px;
  padding-bottom: 9px;
  -ms-flex-item-align: stretch;
  -webkit-align-self: stretch;
  align-self: stretch;
}
.list-block.media-list .item-link .item-inner,
.list-block li.media-item .item-link .item-inner {
  background: none;
  padding-right: 15px;
}
.list-block.media-list .item-link .item-title-row,
.list-block li.media-item .item-link .item-title-row {
  padding-right: 20px;
  background: no-repeat right center;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
  background-size: 10px 20px;
}
.list-block.media-list .item-media,
.list-block li.media-item .item-media {
  padding-top: 9px;
  padding-bottom: 10px;
}
.list-block.media-list .item-media img,
.list-block li.media-item .item-media img {
  display: block;
}
.list-block.media-list .item-title-row,
.list-block li.media-item .item-title-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.list-block.media-list .item-content > .item-after,
.list-block li.media-item .item-content > .item-after {
  margin-right: 15px;
  margin-left: 15px;
}
.list-block .list-group ul:after,
.list-block .list-group ul:before {
  z-index: 25;
}
.list-block .list-group + .list-group ul:before {
  display: none;
}
.list-block .item-divider,
.list-block .list-group-title {
  background: #F7F7F7;
  margin-top: -1px;
  padding: 4px 15px;
  white-space: nowrap;
  position: relative;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #8e8e93;
  z-index: 15;
}
.list-block .item-divider:before,
.list-block .list-group-title:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
  height: 1px;
  width: 100%;
  background-color: #c8c7cc;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}
html.pixel-ratio-2 .list-block .item-divider:before,
html.pixel-ratio-2 .list-block .list-group-title:before {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .list-block .item-divider:before,
html.pixel-ratio-3 .list-block .list-group-title:before {
  -webkit-transform: scaleY(0.33);
  transform: scaleY(0.33);
}
.list-block .list-group-title {
  position: relative;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0px;
  z-index: 20;
  margin-top: 0;
}
.list-block .list-group-title:before {
  display: none;
}
.list-block .sortable-handler {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 1px;
  z-index: 10;
  background-repeat: no-repeat;
  background-size: 18px 12px;
  background-position: center;
  width: 35px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2018%2012'%20fill%3D'%23c7c7cc'%3E%3Cpath%20d%3D'M0%2C2V0h22v2H0z'%2F%3E%3Cpath%20d%3D'M0%2C7V5h22v2H0z'%2F%3E%3Cpath%20d%3D'M0%2C12v-2h22v2H0z'%2F%3E%3C%2Fsvg%3E");
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
.list-block.sortable .item-inner {
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
.list-block.sortable-opened .sortable-handler {
  visibility: visible;
  opacity: 1;
}
.list-block.sortable-opened .item-inner,
.list-block.sortable-opened .item-link .item-inner {
  padding-right: 35px;
}
.list-block.sortable-opened .item-link .item-inner,
.list-block.sortable-opened .item-link .item-title-row {
  background-image: none;
}
.list-block.sortable-sorting li {
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
.list-block li.sorting {
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.6);
  -webkit-transition-duration: 0ms;
  transition-duration: 0ms;
}
.list-block li.sorting .item-inner:after {
  display: none;
}
.list-block li:last-child .list-button:after {
  display: none;
}
.list-block li:last-child .item-inner:after,
.list-block li:last-child li:last-child .item-inner:after {
  display: none;
}
.list-block li li:last-child .item-inner:after,
.list-block li:last-child li .item-inner:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
  height: 1px;
  width: 100%;
  background-color: #c8c7cc;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
html.pixel-ratio-2 .list-block li li:last-child .item-inner:after,
html.pixel-ratio-2 .list-block li:last-child li .item-inner:after {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .list-block li li:last-child .item-inner:after,
html.pixel-ratio-3 .list-block li:last-child li .item-inner:after {
  -webkit-transform: scaleY(0.33);
  transform: scaleY(0.33);
}
</style>
