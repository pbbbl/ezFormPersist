import Cookies from 'js-cookie';
import cleanId from './helpers/cleanId';
import fsValidate from './helpers/fsValidate';
export default () => {
    runFormSaver();
    function runFormSaver () {
        var fieldEls = document.querySelectorAll( '[data-save-field]' );
        fieldEls.forEach( function ( field, index ) {
            var name = 'field_' + index;
            var tag = field.tagName.toLowerCase();
            if ( field && field.name ) {
                name = field.name;
            }
            let options = field.dataset.saveField;

            var expires = 31;

            if ( !isNaN( options ) ) {
                if ( typeof options !== 'number' ) {
                    options = parseInt( options );
                }
                expires = options;
            }
            console.log( 'actual expires', expires );
            var pageId = cleanId();
            var pageName = pageId + '__' + name;
            var siteName = 'user__' + name;
            var pageCookie = fsValidate( Cookies.get( pageName ) );
            var siteCookie = fsValidate( Cookies.get( siteName ) );
            var saved;
            if ( pageCookie.valid ) {
                saved = pageCookie;
            }
            else if ( siteCookie.valid ) {
                saved = siteCookie;
            }
            var eventTypes = {
                input: 'input',
                textarea: 'keyup',
                select: 'change'
            };
            if ( saved ) {
                var savedValue = '';
                if ( saved.value != null && saved.value != undefined ) {
                    if ( saved.value == 'false' ) {
                        savedValue = false;
                    } else {
                        savedValue = saved.value;
                    }
                    field.value = savedValue;
                    field.dispatchEvent( new Event( eventTypes[ tag ] ) );
                    // el.dispatchEvent( new KeyboardEvent( 'keypress', { 'key': 'a' } ) );
                }
            }
            var listenFor = eventTypes[ tag ];
            field.addEventListener( listenFor, function ( e ) {
                var obj = fsValidate( e.target.value );
                if ( obj.valid ) {
                    Cookies.set( siteName, obj.value, { expires } );
                    Cookies.set( pageName, obj.value, { expires } );
                }
            } );
        } );
    }
};

