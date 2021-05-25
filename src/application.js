const { GObject, Gtk, Gio } = imports.gi;

var PlanoApplication = GObject.registerClass({
    GTypeName: 'PlanoApplication',
}, class PlanoApplication extends Gtk.Application {
    _init () {
    	super._init ({ 
    		application_id: 'com.github.diegoivanme.plano',
    		flags: Gio.ApplicationFlags.FLAGS_NONE,
    	});
    }
});
