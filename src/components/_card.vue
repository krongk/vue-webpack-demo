<template>
  <div class="card facebook-card">
  </div>
</template>

<script>
// import { WAIT_IMG } from '../../util'
export default {
  name: 'card'
}
</script>

<style>
/* === F7 Cards === */
.cards-list ul,
.card .list-block ul {
  background: none;
}
.cards-list > ul:before,
.card .list-block > ul:before {
  display: none;
}
.cards-list > ul:after,
.card .list-block > ul:after {
  display: none;
}
.card {
  background: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  margin: 10px 0px;
  position: relative;
  border-radius: 2px;
  font-size: 14px;
}
.card .list-block,
.card .content-block {
  margin: 0;
}
.row:not(.no-gutter) .col > .card {
  margin-left: 0;
  margin-right: 0;
}
.card-content {
  position: relative;
}
.card-content-inner {
  padding: 15px;
  position: relative;
}
.card-content-inner > p:first-child {
  margin-top: 0;
}
.card-content-inner > p:last-child {
  margin-bottom: 0;
}
.card-content-inner > .list-block,
.card-content-inner > .content-block {
  margin: -15px;
}
.card-header,
.card-footer {
  min-height: 44px;
  position: relative;
  padding: 10px 15px;
  box-sizing: border-box;
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
.card-header[valign="top"],
.card-footer[valign="top"] {
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}
.card-header[valign="bottom"],
.card-footer[valign="bottom"] {
  -webkit-box-align: end;
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}
.card-header a.link,
.card-footer a.link {
  line-height: 44px;
  height: 44px;
  text-decoration: none;
  position: relative;
  margin-top: -10px;
  margin-bottom: -10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
html:not(.watch-active-state) .card-header a.link:active,
html:not(.watch-active-state) .card-footer a.link:active,
.card-header a.link.active-state,
.card-footer a.link.active-state {
  opacity: 0.3;
  -webkit-transition-duration: 0ms;
  transition-duration: 0ms;
}
.card-header a.link i + span,
.card-footer a.link i + span,
.card-header a.link i + i,
.card-footer a.link i + i,
.card-header a.link span + i,
.card-footer a.link span + i,
.card-header a.link span + span,
.card-footer a.link span + span {
  margin-left: 7px;
}
.card-header a.link i.icon,
.card-footer a.link i.icon {
  display: block;
}
.card-header a.icon-only,
.card-footer a.icon-only {
  min-width: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  margin: 0;
}
.card-header {
  border-radius: 2px 2px 0 0;
  font-size: 17px;
}
.card-header:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
  height: 1px;
  width: 100%;
  background-color: #e1e1e1;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
}
html.pixel-ratio-2 .card-header:after {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .card-header:after {
  -webkit-transform: scaleY(0.33);
  transform: scaleY(0.33);
}
.card-header.no-border:after {
  display: none;
}
.card-footer {
  border-radius: 0 0 2px 2px;
  color: #6d6d72;
}
.card-footer:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
  height: 1px;
  width: 100%;
  background-color: #e1e1e1;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}
html.pixel-ratio-2 .card-footer:before {
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
html.pixel-ratio-3 .card-footer:before {
  -webkit-transform: scaleY(0.33);
  transform: scaleY(0.33);
}
.card-footer.no-border:before {
  display: none;
}

.facebook-card .card-header {
    display: block;
    padding: 10px;
  }
  .facebook-card .facebook-avatar {
    float: left;
  }
  .facebook-avatar img {
    margin: 4px;
  }
  .facebook-card .facebook-name {
    margin-left: 44px;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }
  .facebook-card .facebook-date {
    margin-left: 44px;
    font-size: 13px;
    color: #8e8e93;
    text-align: left;
  }
  .facebook-card .card-footer {
    background: #fafafa;
  }
  .facebook-card .card-footer a {
    color: #81848b;
    font-weight: 500;
  }
  .facebook-card .card-content img {
    display: block;
  }
  .facebook-card .card-content-inner {
    padding: 15px 10px;
  }

</style>
