with open('frontend/src/components/SchemeCards.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add AlertTriangle to imports
content = content.replace("  FileDown\n} from 'lucide-react';", "  FileDown,\n  AlertTriangle\n} from 'lucide-react';", 1)

# 2. Add error notice right after <div className="space-y-6">
target_div = '<div className="space-y-6">\n      \n      {/* Header & Filter Controls Bar */}'
replacement_div = """<div className="space-y-6">
      
      {/* Profile Conflict Error Notice for Male with Women Entrepreneur */}
      {profile?.gender === 'Male' && (profile?.occupation || '').toLowerCase().includes('women') && (
        <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-red-950/80 via-red-900/40 to-slate-900 border-2 border-red-500 shadow-xl flex items-start gap-3 text-red-200 animate-fadeIn">
          <div className="p-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/40 flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 animate-pulse text-red-400" />
          </div>
          <div className="space-y-1">
            <div className="font-extrabold text-sm text-red-200 flex items-center gap-2">
              <span>{t('genderOccupationMismatchTitle')}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/30 text-red-200 font-bold border border-red-500/50">
                {t('invalidSelection')}
              </span>
            </div>
            <p className="text-xs text-red-200/90 leading-relaxed">
              {t('genderOccupationMismatchMsg')}
            </p>
          </div>
        </div>
      )}

      {/* Header & Filter Controls Bar */}"""

content = content.replace(target_div, replacement_div, 1)

# 3. Add zero-state message if filteredSchemes is empty
old_list = """      {/* Scheme Cards List */}
      <div className="space-y-4">
        {filteredSchemes.map((rawScheme, index) => {"""

new_list = """      {/* Scheme Cards List */}
      <div className="space-y-4">
        {filteredSchemes.length === 0 ? (
          <div className="glass-panel p-8 rounded-3xl border-2 border-slate-800 text-center space-y-4 bg-slate-900/40">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7 text-amber-400" />
            </div>
            <div className="space-y-1 max-w-lg mx-auto">
              <h4 className="text-base font-bold text-white">
                {profile?.gender === 'Male' && (profile?.occupation || '').toLowerCase().includes('women')
                  ? t('genderOccupationMismatchTitle')
                  : "No Schemes Found for Current Filters"}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {profile?.gender === 'Male' && (profile?.occupation || '').toLowerCase().includes('women')
                  ? t('genderOccupationMismatchMsg')
                  : "No eligible government welfare schemes match the selected level, state, or occupation filters. Try clearing or expanding your filter selection."}
              </p>
            </div>
          </div>
        ) : (
          filteredSchemes.map((rawScheme, index) => {"""

content = content.replace(old_list, new_list, 1)

# Close parentheses for ternary if changed
old_end = """              )}

            </div>
          );
        })}
      </div>"""

new_end = """              )}

            </div>
          );
        })
        )}
      </div>"""

content = content.replace(old_end, new_end, 1)

with open('frontend/src/components/SchemeCards.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated frontend/src/components/SchemeCards.jsx successfully!")
