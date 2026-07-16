@echo off
setlocal enabledelayedexpansion

echo ========================================
echo    Rename Foto ^& Video Otomatis
echo ========================================
echo.

:: Folder target = folder tempat .bat ini dijalankan
:: Bisa juga di-drag&drop folder ke atas file .bat ini
set "target=%~dp0"
if not "%~1"=="" set "target=%~1"

pushd "%target%" || (
    echo Folder tidak ditemukan: %target%
    pause
    exit /b
)

:: Daftar ekstensi yang dianggap FOTO
set "fotoExt=.jpg .jpeg .png .gif .bmp .webp .heic .tiff"
:: Daftar ekstensi yang dianggap VIDEO
set "videoExt=.mp4 .mkv .avi .mov .wmv .flv .webm .3gp .m4v"

set fotoCount=0
set videoCount=0
set tempIndex=0

:: TAHAP 1: rename file foto/video ke nama sementara dulu
:: (supaya tidak bentrok/tertimpa saat rename ke nama final)
for %%F in (*.*) do (
    set "ext=%%~xF"
    set "match=0"
    for %%E in (%fotoExt% %videoExt%) do (
        if /I "!ext!"=="%%E" set "match=1"
    )
    if "!match!"=="1" (
        set /a tempIndex+=1
        ren "%%F" "__TEMP_!tempIndex!!ext!"
    )
)

:: TAHAP 2: rename dari nama sementara ke nama final (Foto 1, Foto 2, ... / Video 1, Video 2, ...)
for %%F in (__TEMP_*.*) do (
    set "ext=%%~xF"
    set "isFoto=0"
    for %%E in (%fotoExt%) do if /I "!ext!"=="%%E" set "isFoto=1"

    if "!isFoto!"=="1" (
        set /a fotoCount+=1
        ren "%%F" "Foto !fotoCount!!ext!"
    ) else (
        set /a videoCount+=1
        ren "%%F" "Video !videoCount!!ext!"
    )
)

popd

echo.
echo Selesai!
echo Total Foto  : %fotoCount%
echo Total Video : %videoCount%
echo.
pause
