package com.elshadsm.custombutton

import android.widget.Button
import com.eclipsesource.tabris.android.*
import com.eclipsesource.tabris.android.internal.nativeobject.view.ViewHandler
import com.eclipsesource.v8.V8Object

@Suppress("PARAMETER_NAME_CHANGED_ON_OVERRIDE")
class CustomButtonHandler(private val scope: ActivityScope) : ViewHandler<Button>(scope) {

  override val type = "elshadsm.CustomButton"

  override val properties by lazy {
    super.properties + listOf<Property<Button, *>>(
        StringProperty("text", { text = it }),
        IntProperty("maxLines", { maxLines = it ?: Integer.MAX_VALUE }, { maxLines })
    )
  }

  override fun create(id: String, properties: V8Object) = Button(scope.context)

  override fun listen(id: String, button: Button, event: String, listen: Boolean) = when (event) {
    "select" -> button.setOnClickListener { scope.remoteObject(it)?.notify("select") }
    else -> super.listen(id, button, event, listen)
  }

}
