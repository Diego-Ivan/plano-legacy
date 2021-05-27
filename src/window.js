/* window.js
 *
 * Copyright 2021 DiegoIvan
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const { GObject, Gtk } = imports.gi;

var PlanoWindow = GObject.registerClass({
    GTypeName: 'PlanoWindow',
    Template: 'resource:///com/github/diegoivanme/plano/window.ui',
    InternalChildren: [
    	'coordX1',
    	'coordY1',
    	'coordX2',
    	'coordY2',
    	'resultsSlope',
    	'resultsFormula',
    	'resultsMidpoint',
    	'clearButton',
    	'calculateResults'
    ]
}, class PlanoWindow extends Gtk.ApplicationWindow {
    _init(application) {
        super._init({ application });
        
        const allSpinButtons = [
        	this._coordX1,
        	this._coordY1,
        	this._coordX2,
        	this._coordY2
        ]
        
	    // clear the EntryBuffer
        this._clearButton.connect ('clicked', () => {
        	allSpinButtons.forEach (spinButton => {
        		spinButton.set_value (0);
        	});
        });
        
        this._calculateResults.connect ('clicked', () => {
        	this._verifyEntry (allSpinButtons);
        });
    }
    
    _verifyEntry (spinButton) {
    	
    }
});

