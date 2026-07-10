@echo off
rem Local launch helper: ensures Node is on PATH before starting the Next dev server.
rem Needed because a Claude session started before Node was installed inherits a stale PATH,
rem so preview_start's spawned process can't find npm/node otherwise.
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0..\nextjs"
call npm run dev
